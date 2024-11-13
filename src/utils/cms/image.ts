import createImageUrlBuilder from "@sanity/image-url"
import { type SanityImageSource } from "@sanity/image-url/lib/types/types"

import { dataset, projectId } from "../../config/cms/environment"

const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: SanityImageSource) => builder.image(source)
