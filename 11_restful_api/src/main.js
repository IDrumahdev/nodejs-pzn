import { web } from "./application/web.js";
import { logger } from "./application/logging.js";

web.listen(3500, () => {
    logger.info("Apps Start");
})