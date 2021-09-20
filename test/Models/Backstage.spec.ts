import { BackStageItem } from '../../app/Models/Backstage';
import { expect } from "chai";

describe('BackStageItem', function () {
    const item = new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 15, 20)

    describe('updateQuality', function () {

        it('should increase quality by 1 if the sellin date is > 10', function () {
            item.updateQuality();
            expect(item.quality).to.be.eq(21);
        })

        it('should increase quality by 2 if selling date is <= 10', function () {
            item.sellIn = 10;
            item.updateQuality();
            expect(item.quality).to.be.eq(23);
        });

        it('should increase quality by 3 if selling date is <=5', function () {
            item.sellIn = 5;
            item.updateQuality();
            expect(item.quality).to.be.eq(26);
        });

        it('should have quality set to 0 after selling date', function () {
            item.sellIn = 0;
            item.updateQuality();
            expect(item.quality).to.be.eq(0);
        });
    });
});