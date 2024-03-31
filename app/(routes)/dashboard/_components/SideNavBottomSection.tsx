import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Constant from "@/app/_constant/Constant";
import NewFeatures from "./NewFeatures";

function SideNavBottomSection({ onFileCreate, totalFiles }: any) {
  const menuList = [
    {
      id: 1,
      name: "Always free",
      icon: Flag,
      path: "",
    },
    {
      id: 2,
      name: "Coming soon",
      icon: Github,
      path: "",
    },
    // {
    //   id: 3,
    //   name: "Archive",
    //   icon: Archive,
    //   path: "",
    // },
  ];

  const [fileInput, setFileInput] = useState("");

  return (
    <div>
      {menuList.map((menu, idx) => (
        <h2
          key={idx}
          className="flex gap-2 p-1 px-2 text-[14px] hover:bg-gray-100 rounded-md cursor-pointer "
        >
          <menu.icon className="h-4 w-5" />
          {menu.name}
        </h2>
      ))}

      {/* Add New File Button  */}

      <Dialog>
        <DialogTrigger className="w-full" asChild>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 justify-start mt-3">
            New File
          </Button>
        </DialogTrigger>
        {totalFiles < Constant.MAX_FREE_FILE ? (
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New File</DialogTitle>
              <DialogDescription>
                <Input
                  placeholder="Enter File Name"
                  className=" mt-3"
                  onChange={(e) => setFileInput(e.target.value)}
                />
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!(fileInput && fileInput.length >= 3)}
                  onClick={() => onFileCreate(fileInput)}
                >
                  Create
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        ) : (
          <NewFeatures />
        )}
      </Dialog>

      {/* Progress Bar   */}

      <div className="h-4 w-full bg-gray-100 rounded-full mt-5 ">
        <div
          className={`h-4 
          
           bg-blue-600 rounded-full mt-5`}
          style={{ width: `${(totalFiles / 5) * 100}%` }}
        ></div>
      </div>

      <h2 className="text-[12px] mt-3">
        <strong>{totalFiles}</strong> out of{" "}
        <strong>{Constant.MAX_FREE_FILE}</strong> files used
      </h2>
      <h2 className="text-[12px] mt-1">
        {" "}
        <a
          className="text-[15px] hover:underline"
          target="_blank"
          href="https://github.com/Adnaanlegend/diagram"
        >
          Star the Repo
        </a>
        <p className="mt-3">
          {" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adnaanhussain786/"
            className="text-[15px] hover:underline"
          >
            Made by Adnaan Hussain
          </a>
        </p>
      </h2>
    </div>
  );
}

export default SideNavBottomSection;
