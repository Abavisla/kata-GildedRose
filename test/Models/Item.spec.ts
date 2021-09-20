import { expect } from 'chai';
import { Item } from "../../app/Models/Item";

describe('Item', function () {
    const item = new Item("+5 Dexterity Vest", 10, 20);


   describe('creation of item with name \'+5 Dexterity Vest\' with 10 sellIn days and 20 in quality', function () {

      it('item object should have keys: name, sellIn, quality', function () {
         expect(item).to.have.any.keys('name', 'sellIn', 'quality');
      });

      it('should have quality equal to 20', function () {
         expect(item.quality).to.be.eq(20);
      });
      it('should have sell in day equal to 10', function () {
         expect(item.sellIn).to.be.eq(10);
      });
   })

   describe('decreaseSellIn', function () {
      it('should decrease sellIn by one', function () {
         item.updateSellIn();
         expect(item.sellIn).to.be.eq(9);
      });
   })

   describe('updateQuality', function () {

      it('should decrease quality by 1 if sellIn day is >0', function () {
         item.updateQuality();
         expect(item.quality).to.be.eq(19);
      });


      it('should decrease quality twice as fast if sellIn day <=0', function () {
         item.sellIn = 0;
         item.updateQuality();
         expect(item.quality).to.be.eq(17);
      });

      it('should not have quality<0', function () {
         item.quality = 0;
         item.updateQuality();
         expect(item.quality).to.be.eq(0);
      });

      it('should not have quality >50', function () {
         item.quality = 50;
         item.updateQuality();
         expect(item.quality).not.to.be.greaterThan(50);
      });
   });

});
