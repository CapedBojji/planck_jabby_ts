import Scheduler from "@rbxts/planck/out/Scheduler";
import { Plugin } from "@rbxts/planck/out/types";

declare class PlankJabbyPlugin implements Plugin {
    build<T extends unknown[]>(schedular: Scheduler<T>): void
}

export = PlankJabbyPlugin;