import { App, Menu, Switch, Tooltip } from "antd";
import { MessageSquare, Moon, Settings, Sun } from "lucide-react";
import { FormEvent, useEffect } from "react";
import { useLocation } from "wouter";
import { useAppState } from "../App";
import { isSystemDarkMode } from "../utils";
const Navbar = () => {
  const [location, navigate] = useLocation();

  const app = useAppState();
  return (
    <div className="w-full bg-blue-800">
      <div className="flex flex-row justfy-between mx-auto container">
        <Menu
          mode="horizontal"
          className="w-full border-b-0 text-blue-100 bg-blue-800"
          selectable={false}
          items={[
            {
              label: (
                <img
                  src="/branding/branding-horizontal-light.png"
                  className="object-contain h-5"
                />
              ),
              className: "!flex !flex-row !items-center",
              key: "none",
              onClick: () => navigate("/"),
            },
            { label: "Prompts", key: "prompts", onClick: () => navigate("/") },
            { label: "Workflows", key: "workflows", onClick: () => navigate("/workflows") },
            { label: "Explore", key: "explore", onClick: () => navigate("/explore") },
          ]}
        />
        <Menu
          disabledOverflow
          mode="horizontal"
          className=" border-b-0 min-w-96 w-96 flex flex-row justify-end  text-blue-100  bg-blue-800"
          items={[
            {
              label: (
                <Switch
                  checked={app.darkMode}
                  className="dark:!bg-blue-600 !bg-gray-200 hover:!bg-gray-400"
                  checkedChildren={
                    <Moon
                      size={12}
                      strokeWidth={3}
                      className="mt-1 text-white"
                    />
                  }
                  unCheckedChildren={
                    <Sun
                      size={12}
                      strokeWidth={3}
                      className=" mt-1 text-black"
                    />
                  }
                  onChange={app.toggleDarkMode}
                />
              ),
              key: "darkMode",
            },
            {
              key: "settings",

              icon: (
                <Tooltip className="Change user settings">
                  <Settings size={12} />
                </Tooltip>
              ),
              onClick: () => navigate("/settings"),
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Navbar;
