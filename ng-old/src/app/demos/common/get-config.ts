import { inject } from "@angular/core";
import { Protocol } from "../models/protocol.model";
import { ConfigurationService } from "../configuration.service";

export function getConfigUrl(protocol: Protocol): string {
    const config = inject(ConfigurationService);
    return config.getUrl(protocol);
}

export function getConfigurer(): (v: Protocol) => string {
    const config = inject(ConfigurationService);

    return (p: Protocol) => config.getUrl(p);
}