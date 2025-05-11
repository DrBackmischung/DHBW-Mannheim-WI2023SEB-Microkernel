import { Core } from "./Core";
import { HelloPlugin } from "./HelloPlugin";
import { TimePlugin } from "./TimePlugin";

const core = new Core();

core.registerPlugin(new HelloPlugin());
core.registerPlugin(new TimePlugin());

core.run();