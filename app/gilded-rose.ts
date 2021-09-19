export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            switch (item.name) {
                case 'Aged Brie':
                    item.sellIn > 0 ? item.quality += 1 : item.quality += 2;
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    item.sellIn <= 0 ?
                        item.quality = 0 :
                        item.quality = item.quality + 1
                        +
                        (item.sellIn < 11 ? 1
                            +
                            (item.sellIn < 6 ? 1 : 0)
                            : 0)
                        ;
                    item.quality > 50 ? item.quality = 50 : 0;
                    break;
                default:
                    item.sellIn > 0 ? item.quality -= 1 : item.quality -= 2;
                    break;
            }
            item.sellIn -= 1;
            item.quality > 50 && item.name!=='Sulfuras, Hand of Ragnaros' ? item.quality=50 : 0;
            item.quality < 0 ? item.quality = 0 : 0;
        });
    }

}
