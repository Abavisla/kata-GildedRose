import { AgedBrie } from './../../app/Models/AgedBrie';
import { expect } from 'chai';

describe('AgedBrie', function () {
    const item = new AgedBrie("Aged Brie", 2, 0);

   describe('updateQuality', function () {

      it('should increase quality by 1 if sellIn day is >0', function () {
         item.updateQuality();
         expect(item.quality).to.be.eq(1);
      });


      it('should inscrease quality by 2 if sellIn day <=0', function () {
         item.sellIn = 0;
         item.updateQuality();
         expect(item.quality).to.be.eq(3);
      });

   });

});
