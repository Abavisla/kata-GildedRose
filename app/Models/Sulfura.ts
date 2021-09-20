import { Item } from "./item";

export class SulfurasItem extends Item {
    constructor(
        name: string, sellIn: number) {
        super(name, sellIn, 80);
    }

    updateQuality() { }
    updateSellIn() {
    }
}