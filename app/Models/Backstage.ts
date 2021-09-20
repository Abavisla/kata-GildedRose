import { Item } from './item';

export class BackStageItem extends Item {

    constructor(
        name: string,
        sellIn: number,
        quality: number){
            super(name,sellIn,quality);
    }
    
    updateQuality(){
        if (this.sellIn <= 0) {
            this.quality = 0;
        }
        else {
               this.quality = this.quality + 1
                        +
                        (this.sellIn < 11 ? 1
                            +
                            (this.sellIn < 6 ? 1 : 0)
                            : 0);
        }
        this.updateSellIn();
        this.checkQuality();
    }
}