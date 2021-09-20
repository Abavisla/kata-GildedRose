import { ConjuredItem } from './../app/Models/ConjuredItem';
import { SulfurasItem } from './../app/Models/Sulfura';
import { BackStageItem } from './../app/Models/Backstage';
import { AgedBrie } from './../app/Models/AgedBrie';
import { GildedRose } from '../app/gilded-rose';
import { Item } from "../app/Models/Item";

const items = [
    new Item("+5 Dexterity Vest", 10, 20), 
    new AgedBrie("Aged Brie", 2, 0), 
    new Item("Elixir of the Mongoose", 5, 7), 
    new SulfurasItem("Sulfuras, Hand of Ragnaros", 0), 
    new SulfurasItem("Sulfuras, Hand of Ragnaros", -1),
    new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new ConjuredItem("Conjured Mana Cake", 3, 6)
];


const gildedRose = new GildedRose(items);
var days: number = 17;
for (let i = 0; i < days; i++) {
    console.log("-------- day " + i + " --------");
    console.log("name, sellIn, quality");
    items.forEach(element => {
        console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
}