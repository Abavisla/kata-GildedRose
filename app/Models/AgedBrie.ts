import { Item } from "./item";

export class AgedBrie extends Item {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
    }

    updateQuality(){
        this.sellIn > 0 ? this.quality += 1 : this.quality += 2;
        this.updateSellIn();
        this.checkQuality();
    }
}