// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ryigQvYu19ygnoy3uho1cD
// Component: JjnjqRD_H8EA

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { clerkUserButton } from "../../clerktdf/tdf-userbutton"; // plasmic-import: utsaHgwz9FL1/codeComponent
import Button from "../../Button"; // plasmic-import: nPwEx6GLwm-X/component
import { ClerkSignOutButton } from "../../logoutButtonClerk"; // plasmic-import: 1Cy4KmX8hEfh/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ryigQvYu19ygnoy3uho1cD/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: JjnjqRD_H8EA/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: jx9C0ZbPUTiL/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Q8VEKYx1lhVM/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  clerkUserButton?: Flex__<typeof clerkUserButton>;
  clerkSignOutButton?: Flex__<typeof ClerkSignOutButton>;
  svg?: Flex__<"svg">;
  h1?: Flex__<"h1">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___8Qdfh)}
          >
            <clerkUserButton
              data-plasmic-name={"clerkUserButton"}
              data-plasmic-override={overrides.clerkUserButton}
              className={classNames("__wab_instance", sty.clerkUserButton)}
              showName={true}
            />

            <Button
              className={classNames("__wab_instance", sty.button__ehe3K)}
              onClick={async event => {
                const $steps = {};

                $steps["goToLogin"] = true
                  ? (() => {
                      const actionArgs = { destination: `/login` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToLogin"] != null &&
                  typeof $steps["goToLogin"] === "object" &&
                  typeof $steps["goToLogin"].then === "function"
                ) {
                  $steps["goToLogin"] = await $steps["goToLogin"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vGbGp
                )}
              >
                {"To login page"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__kbFj)}
              onClick={async event => {
                const $steps = {};

                $steps["goToAdminPage"] = true
                  ? (() => {
                      const actionArgs = { destination: `/admin-page` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToAdminPage"] != null &&
                  typeof $steps["goToAdminPage"] === "object" &&
                  typeof $steps["goToAdminPage"].then === "function"
                ) {
                  $steps["goToAdminPage"] = await $steps["goToAdminPage"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ywLlu
                )}
              >
                {"To admin page"}
              </div>
            </Button>
            <ClerkSignOutButton
              data-plasmic-name={"clerkSignOutButton"}
              data-plasmic-override={overrides.clerkSignOutButton}
              className={classNames("__wab_instance", sty.clerkSignOutButton)}
            >
              <IconIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </ClerkSignOutButton>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__wjU6V)}>
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Home page"}
            </h1>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rjriA
              )}
            >
              {"Dit is een test. 4"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bIkan
              )}
            >
              {"Logged in user details:"}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rrQyE
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "isLoggedIn =  " + currentUser.isLoggedIn;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Logged in user details:";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1Gp5L
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "email =  " + currentUser.email;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Logged in user details:";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__y6H9L
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return "roleName =  " + currentUser.roleName;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "Logged in user details:";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "clerkUserButton", "clerkSignOutButton", "svg", "h1"],
  clerkUserButton: ["clerkUserButton"],
  clerkSignOutButton: ["clerkSignOutButton", "svg"],
  svg: ["svg"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  clerkUserButton: typeof clerkUserButton;
  clerkSignOutButton: typeof ClerkSignOutButton;
  svg: "svg";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    clerkUserButton: makeNodeComponent("clerkUserButton"),
    clerkSignOutButton: makeNodeComponent("clerkSignOutButton"),
    svg: makeNodeComponent("svg"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
