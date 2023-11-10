import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

web.listen(3400, () => {
    logger.info("Apps Start");
})