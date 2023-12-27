"use client";
import {
  Dropdown,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import ClientButton from "./ClientButton";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

function ProfileButton() {
  const { status, data } = useSession();
  return (
    <Dropdown
      radius="sm"
      className={clsx(
        "block",
        status === "authenticated" ? "block" : "md:hidden"
      )}
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger
        className={clsx("flex", status !== "authenticated" && "mbig:hidden")}
      >
        <Button
          variant="ghost"
          disableRipple
          className="min-w-[29px] w-[29px] min-h-[29px] h-[29px] p-0 mt-[2px] rounded-xl"
        >
          <FiUser className="text-base" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection
          aria-label="Profile & Actions"
          showDivider
          hidden={status !== "authenticated"}
        >
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={data?.user?.name}
              description={data?.user?.email}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: data?.user?.image ?? undefined,
              }}
            />
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          <DropdownItem
            isReadOnly
            key="theme"
            className="cursor-default"
            endContent={
              <select
                disabled
                className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                id="theme"
                name="theme"
              >
                <option>Light</option>
                {/* <option>Dark</option> */}
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="settings">
          <DropdownItem key="help_and_feedback">Settings</DropdownItem>
          <DropdownItem
            hidden={status !== "authenticated"}
            key="logout"
            className={clsx(
              "group hidden",
              status === "authenticated" && "flex"
            )}
          >
            <ClientButton
              size="sm"
              className="w-fit min-w-fit h-auto p-0 text-sm bg-transparent"
              events={{ onClick: signOut }}
            >
              <span className="text-rose-500 font-semibold group-hover:text-rose-600 group-hover:font-bold">
                Log Out
              </span>
            </ClientButton>
          </DropdownItem>
          <DropdownItem
            hidden={status === "authenticated"}
            key="signUp"
            className={clsx(
              "group hidden",
              status !== "authenticated" && "flex"
            )}
          >
            <span className="text-neutral-800 font-semibold group-hover:text-neutral-900 group-hover:font-bold ">
              <Link href={"sign-up"}>Sign up</Link>
            </span>
          </DropdownItem>
          <DropdownItem
            hidden={status === "authenticated"}
            key="login"
            className={clsx(
              "group hidden",
              status !== "authenticated" && "flex"
            )}
          >
            <span className="text-neutral-800 font-semibold group-hover:text-neutral-900 group-hover:font-bold ">
              <Link href={"sign-in"}>Log in</Link>
            </span>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}

export default ProfileButton;
