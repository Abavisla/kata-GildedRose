import { expect } from "chai";
import { ConjuredItem } from "../../app/Models/ConjuredItem";

describe('ConjuredItem', function(){
    const item = new ConjuredItem('Conjured Mana Cake', 3, 6);

    describe('updateQuality',function(){

      it('should decrease quality by 2 if sellIn >0', function(){
         item.updateQuality();
         expect(item.quality).to.be.eq(4);
      });

      it('should decrease quality by 4 if sellIn <=0', function(){
         item.sellIn = 0;
         item.quality = 4;
         item.updateQuality();
         expect(item.quality).to.be.eq(0);
      });

      it('should not have negative quality', function(){
        item.quality = 1;
        item.updateQuality();
        expect(item.quality).to.be.eq(0);
     });
   });

 });