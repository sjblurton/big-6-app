"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import {
  MuiBottomNavigation,
  MuiBottomNavigationAction,
  MuiFloatingActionButton,
  MuiPaper,
} from "../../library/mui";
import {
  MuiAddIcon,
  MuiCalendarMonthIcon,
  MuiClipboardIcon,
  MuiHomeIcon,
  MuiTimerIcon,
} from "../../library/muiIcons";
import * as styles from "./BottomNavigation.module.scss";

const navigation = [
  { value: "home", label: "Home", icon: <MuiHomeIcon /> },
  { value: "log", label: "Log", icon: <MuiClipboardIcon /> },
  { value: "calender", label: "Calender", icon: <MuiCalendarMonthIcon /> },
  { value: "timer", label: "Timer", icon: <MuiTimerIcon /> },
];

export default function LabelBottomNavigation() {
  const [value, setValue] = useState("home");
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(`/${newValue}`);
  };

  return (
    <MuiPaper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
      elevation={3}
    >
      <MuiBottomNavigation
        sx={{
          width: "100%",
        }}
        value={value}
        onChange={handleChange}
      >
        <div className={styles.add}>
          <MuiFloatingActionButton
            color="warning"
            aria-label="add"
            onClick={() => router.push("/add")}
          >
            <MuiAddIcon fontSize="large" />
          </MuiFloatingActionButton>
        </div>

        {navigation.map((nav) => (
          <MuiBottomNavigationAction
            key={nav.value}
            label={nav.label}
            value={nav.value}
            icon={nav.icon}
          />
        ))}
      </MuiBottomNavigation>
    </MuiPaper>
  );
}
