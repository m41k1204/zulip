import assert from "minimalistic-assert";

import { page_params as base_page_params } from "../base_page_params.ts";
import { functions } from "lodash";

assert(base_page_params.page_type === "upgrade");

// We need to export with a narrowed TypeScript type
// eslint-disable-next-line unicorn/prefer-export-from
export const page_params = base_page_params;


