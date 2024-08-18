import { getToken } from "next-auth/jwt"

import { NextRequest, NextResponse } from "next/server"
import ErrorHandler from "./modules/api/error-handler/ErrorHandler"
import { middleware } from "./middleware"
import { ApiBaseError } from "./modules/api/error-handler/errors/api.error.base"

jest.mock("next-auth/jwt", () => ({
    getToken: jest.fn(),
}))

jest.mock("next/server", () => ({
    NextResponse: {
        next: jest.fn(),
    },
}))

jest.mock("./modules/api/error-handler/ErrorHandler")

describe("middleware", () => {
    const secret = "test-secret"
    let req: NextRequest

    beforeEach(() => {
        process.env.NEXTAUTH_SECRET = secret
        req = {
            headers: new Headers(),
        } as NextRequest
        ;(NextResponse.next as jest.Mock).mockReturnValue("NextResponse")
        ;(ErrorHandler as jest.Mock).mockImplementation(() => ({
            handle: jest.fn().mockReturnValue("ErrorHandlerResponse"),
        }))
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    const testEmail = "test@example.com"

    it("should call NextResponse.next with the request headers set when a valid token is provided", async () => {
        const token = { email: testEmail }

        ;(getToken as jest.Mock).mockResolvedValue(token)

        const response = await middleware(req)

        expect(getToken).toHaveBeenCalledWith({ req, secret })

        expect(response).toBe("NextResponse")

        expect(NextResponse.next).toHaveBeenCalledWith({
            request: expect.objectContaining({
                headers: expect.any(Headers),
            }),
        })

        const { headers } = (NextResponse.next as jest.Mock).mock.calls[0][0]
            .request
        expect(headers.get("x-user-email")).toBe(testEmail)
    })

    it("should call the error handler with a ApiError", async () => {
        ;(getToken as jest.Mock).mockResolvedValue(null)

        const response = await middleware(req)

        expect(getToken).toHaveBeenCalledWith({ req, secret })

        expect(ErrorHandler).toHaveBeenCalledWith(expect.any(ApiBaseError))

        expect(response).toBe("ErrorHandlerResponse")
    })

    it("should throw an error and call ErrorHandler.handle when token has no email", async () => {
        const token = { email: null }

        ;(getToken as jest.Mock).mockResolvedValue(token)

        const response = await middleware(req)

        expect(getToken).toHaveBeenCalledWith({ req, secret })

        expect(ErrorHandler).toHaveBeenCalledWith(expect.any(ApiBaseError))

        expect(response).toBe("ErrorHandlerResponse")
    })

    it("should handle errors and call ErrorHandler.handle", async () => {
        const testError = new Error("Test error")

        ;(getToken as jest.Mock).mockRejectedValue(testError)

        const response = await middleware(req)

        expect(getToken).toHaveBeenCalledWith({ req, secret })

        expect(ErrorHandler).toHaveBeenCalledWith(testError)

        expect(response).toBe("ErrorHandlerResponse")
    })
})
