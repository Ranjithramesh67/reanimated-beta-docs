// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import InteractiveExample from "@site/src/components/InteractiveExample";
import ModifierPlayground from "@site/src/components/ModifierPlayground";
import CollapsibleCode from "@site/src/components/CollapsibleCode";
import Optional from "@site/src/components/Optional";
import Indent from "@site/src/components/Indent";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  InteractiveExample,
  ModifierPlayground,
  CollapsibleCode,
  Optional,
  Indent,
};
