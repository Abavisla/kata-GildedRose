import { Item } from "./item";

export class ConjuredItem extends Item{

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
        }

    updateQuality(){
        this.sellIn > 0 ? this.quality -= 2 : this.quality -= 4;
        this.updateSellIn();
        this.checkQuality();
    }
}