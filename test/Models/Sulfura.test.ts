import { SulfurasItem } from './../../app/Models/Sulfura';
import { expect } from "chai";

describe('Sulfras Item', function () {
    const item = new SulfurasItem("Sulfuras, Hand of Ragnaros", 0);

    describe('on creation', function () {

        it('should have quality set to 80', function () {
            expect(item.quality).to.be.eq(80);
        });

    });

    describe('updateQuality', function () {

        it('must not alter quality', function () {
            item.updateQuality();
            expect(item.quality).to.be.eq(80);
        });

    });

});