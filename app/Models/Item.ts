export class Item {
 
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.sellIn > 0 ? this.quality -= 1 : this.quality -= 2;
        this.updateSellIn();
        this.checkQuality();
    }

    updateSellIn() {
        this.sellIn--;
    }

    checkQuality() {
        this.quality = this.quality < 0 ? 0 : this.quality;
        this.quality = this.quality > 50 ? 50 : this.quality;
    }
}
