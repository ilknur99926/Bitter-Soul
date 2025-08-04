const drinks = {
  az: {
    categories: ['Hamısı', 'İsti Qəhvə', 'Soyuq Qəhvə', 'Çay'],
    items: [
  
      { id: 1, name: 'Espresso', description: 'Qatı və təravətli klassik İtalyan qəhvəsi', ingredients: ['Təmiz qəhvə dənəsi', 'Su'], quote: 'Həqiqət kimi qat, həyat kimi acı', price: 3.5, image: '/menu/espresso.png', type: 'İsti Qəhvə' },
      { id: 2, name: 'Cappuccino', description: 'Espresso, buxarlanmış süd və köpük', ingredients: ['Espresso', 'Buxarlanmış süd'], quote: 'Mükəmməl balans - həyatın mərkəzi', price: 4.5, image: '/menu/cappuccino.jpg', type: 'İsti Qəhvə' },
      { id: 3, name: 'Latte', description: 'Yumşaq və kremli qəhvə təcrübəsi', ingredients: ['Espresso', 'Buxarlanmış süd'], quote: 'Yumşaqlıq da gücdür', price: 4.8, image: '/menu/latte.png', type: 'İsti Qəhvə' },
      { id: 4, name: 'Flat White', description: 'Latte-yə bənzər, amma daha az köpüklü', ingredients: ['Espresso', 'Süd'], quote: 'Sakitlik və güc eyni fincanda', price: 4.6, image: '/menu/flatwhite.jpg', type: 'İsti Qəhvə' },
      { id: 5, name: 'Macchiato', description: 'Espresso üzərində bir damla süd köpüyü', ingredients: ['Espresso', 'Süd köpüyü'], quote: 'Zərif toxunuş güc yaradar', price: 4.2, image: '/menu/macchiato.jpg', type: 'İsti Qəhvə' },
      { id: 6, name: 'Mocha', description: 'Şokolad və qəhvənin mükəmməl birləşməsi', ingredients: ['Espresso', 'Şokolad sousu', 'Süd'], quote: 'Şirinlik bəzən gərəklidir', price: 5.2, image: '/menu/mocha.jpg', type: 'İsti Qəhvə' },
      { id: 7, name: 'Americano', description: 'Espresso və isti su ilə hazırlanmış', ingredients: ['Espresso', 'İsti su'], quote: 'Sakitlik gücdür insanlarda', price: 3.8, image: '/menu/americano.jpg', type: 'İsti Qəhvə' },
      { id: 8, name: 'Irish Coffee', description: 'Qəhvə və viski qarışımı', ingredients: ['Espresso', 'Viski', 'Krem'], quote: 'Cəsarətli ruhlara', price: 6.0, image: '/menu/irishcoffee.jpg', type: 'İsti Qəhvə' },
      { id: 9, name: 'Türk Qəhvəsi', description: 'Ənənəvi dəmləmə üsulu ilə', ingredients: ['Türk qəhvəsi', 'Su'], quote: 'Köhnə zamanların səsi', price: 3.0, image: '/menu/turkcoffee.png', type: 'İsti Qəhvə' },

      { id: 10, name: 'Affogato', description: 'Dondurma üzərinə espresso', ingredients: ['Espresso', 'Vanil dondurma'], quote: 'Ziddiyyətlərin harmoniyası', price: 5.0, image: '/menu/affogato.jpg', type: 'Soyuq Qəhvə' },
      { id: 11, name: 'Cold Brew', description: 'Uzun müddət dəmlənmiş buzlu qəhvə', ingredients: ['Qəhvə', 'Soyuq su'], quote: 'Səbirin meyvəsi soyuq olur', price: 4.7, image: '/menu/coldbrew.jpg', type: 'Soyuq Qəhvə' },
      { id: 12, name: 'Frappe', description: 'Soyuq, köpüklü və təravətli', ingredients: ['Qəhvə', 'Buz', 'Süd'], quote: 'Soyuq da ruhu isidə bilər', price: 4.2, image: '/menu/frappe.jpg', type: 'Soyuq Qəhvə' },
      { id: 13, name: 'Iced Latte', description: 'Latte-nin buzlu versiyası', ingredients: ['Espresso', 'Soyuq süd', 'Buz'], quote: 'Zəriflik soyuqda gizlənir', price: 4.6, image: '/menu/icedlatte.jpg', type: 'Soyuq Qəhvə' },
      { id: 14, name: 'Iced Americano', description: 'Americano-nun buzlu versiyası', ingredients: ['Espresso', 'Soyuq su', 'Buz'], quote: 'Səssiz və dərin', price: 4.0, image: '/menu/icedamericano.jpg', type: 'Soyuq Qəhvə' },
      { id: 15, name: 'Mocha Frappe', description: 'Soyuq mocha təcrübəsi', ingredients: ['Espresso', 'Şokolad', 'Buz'], quote: 'Qaranlıq və şirin', price: 4.8, image: '/menu/mochafrappe.jpg', type: 'Soyuq Qəhvə' },
      { id: 16, name: 'Iced Macchiato', description: 'Soyuq süd və espresso', ingredients: ['Espresso', 'Süd', 'Buz'], quote: 'İncəlik və güc', price: 4.5, image: '/menu/icedmacchiato.jpg', type: 'Soyuq Qəhvə' },
      { id: 17, name: 'Coffee Smoothie', description: 'Qəhvə və meyvə qarışımı', ingredients: ['Qəhvə', 'Banan', 'Süd'], quote: 'Təbiətlə qovuşma', price: 5.5, image: '/menu/coffeesmoothie.jpg', type: 'Soyuq Qəhvə' },
      { id: 18, name: 'Coffee Milkshake', description: 'Qəhvə və dondurmanın mükəmməl uyğunluğu', ingredients: ['Qəhvə', 'Dondurma', 'Süd'], quote: 'Uşaq ruhu ilə böyüklər ləzzəti', price: 5.8, image: '/menu/coffeemilkshake.jpg', type: 'Soyuq Qəhvə' },
      { id: 19, name: 'Vanilla Iced Coffee', description: 'Vanil ətirli buzlu qəhvə', ingredients: ['Espresso', 'Vanil siropu', 'Buz'], quote: 'İncə dad, sakit hiss', price: 4.9, image: '/menu/vanillaiced.jpg', type: 'Soyuq Qəhvə' },
      { id: 20, name: 'Caramel Iced Coffee', description: 'Karamel və qəhvənin birləşməsi', ingredients: ['Espresso', 'Karamel siropu', 'Süd', 'Buz'], quote: 'Şirin və təravətli', price: 5.0, image: '/menu/carameliced.jpg', type: 'Soyuq Qəhvə' },

      { id: 21, name: 'Yaşıl Çay', description: 'Təmizləyici və rahatladıcı içki', ingredients: ['Yaşıl çay yarpaqları'], quote: 'Təmizlik içdən başlayır', price: 3.2, image: '/menu/greentea.jpg', type: 'Çay' },
      { id: 22, name: 'Earl Grey', description: 'Bergamot ətirli qara çay', ingredients: ['Qara çay', 'Bergamot'], quote: 'Dəyişiklik zərurətdir', price: 3.5, image: '/menu/earlgrey.jpg', type: 'Çay' },
      { id: 23, name: 'Çobanyastığı Çayı', description: 'Yatışdırıcı və rahatladıcı', ingredients: ['Çobanyastığı'], quote: 'Sakitlik bir fincandadır', price: 3.0, image: '/menu/chamomile.jpg', type: 'Çay' },
      { id: 24, name: 'Nanə Çayı', description: 'Yeniləyici və təravətli', ingredients: ['Nanə yarpaqları'], quote: 'Təravət yudum-yudum gəlir', price: 3.0, image: '/menu/minttea.jpg', type: 'Çay' },
      { id: 25, name: 'İtburnu Çayı', description: 'C vitamini ilə zəngin', ingredients: ['İtburnu'], quote: 'Sağlamlığın dadlı yolu', price: 3.2, image: '/menu/rosehip.jpg', type: 'Çay' },
      { id: 26, name: 'Qara Çay', description: 'Ənənəvi dəmləmə üsulu ilə', ingredients: ['Qara çay'], quote: 'Sadəlikdə güc var', price: 2.5, image: '/menu/blacktea.jpg', type: 'Çay' },
      { id: 27, name: 'Limonlu Çay', description: 'Təzə limonlu isti çay', ingredients: ['Qara çay', 'Limon'], quote: 'Turşu və istilik bir yerdə', price: 3.0, image: '/menu/lemontea.jpg', type: 'Çay' },
      { id: 28, name: 'Zəncəfil Çayı', description: 'İsinmək və enerjini artırmaq üçün', ingredients: ['Zəncəfil', 'Bal', 'Limon'], quote: 'İsinmək ruhdan başlayır', price: 3.4, image: '/menu/gingertea.png', type: 'Çay' },
      { id: 29, name: 'Böyürtkən Çayı', description: 'Meyvə tərkibli şirin çay', ingredients: ['Böyürtkən'], quote: 'Təbiətin şirin səsi', price: 3.6, image: '/menu/blackberrytea.jpg', type: 'Çay' },
      { id: 30, name: 'Lavanda Çayı', description: 'Stressi azaldan və rahatladıcı', ingredients: ['Lavanda'], quote: 'Lavanda ilə ruha sükunət', price: 3.3, image: '/menu/lavendertea.jpg', type: 'Çay' }
    ]
  },


  en: {
    categories: ['All', 'Hot Coffee', 'Iced Coffee', 'Tea'],
    items: [
      { id: 1, name: 'Espresso', description: 'Strong and refreshing classic Italian coffee', ingredients: ['Pure coffee beans', 'Water'], quote: 'Thick as truth, bitter as life', price: 3.5, image: '/menu/espresso.jpg', type: 'Hot Coffee' },
      { id: 2, name: 'Cappuccino', description: 'Espresso with steamed milk and foam', ingredients: ['Espresso', 'Steamed milk'], quote: 'Perfect balance - the center of life', price: 4.5, image: '/menu/cappuccino.jpg', type: 'Hot Coffee' },
      { id: 3, name: 'Latte', description: 'Smooth and creamy coffee experience', ingredients: ['Espresso', 'Steamed milk'], quote: 'Softness is also strength', price: 4.8, image: '/menu/latte.png', type: 'Hot Coffee' },
      { id: 4, name: 'Flat White', description: 'Similar to latte but with less foam', ingredients: ['Espresso', 'Milk'], quote: 'Calmness and strength in the same cup', price: 4.6, image: '/menu/flatwhite.jpg', type: 'Hot Coffee' },
      { id: 5, name: 'Macchiato', description: 'Espresso with a drop of milk foam', ingredients: ['Espresso', 'Milk foam'], quote: 'A delicate touch creates power', price: 4.2, image: '/menu/macchiato.jpg', type: 'Hot Coffee' },
      { id: 6, name: 'Mocha', description: 'Perfect combination of chocolate and coffee', ingredients: ['Espresso', 'Chocolate sauce', 'Milk'], quote: 'Sweetness is sometimes necessary', price: 5.2, image: '/menu/mocha.jpg', type: 'Hot Coffee' },
      { id: 7, name: 'Americano', description: 'Made with espresso and hot water', ingredients: ['Espresso', 'Hot water'], quote: 'Calmness is strength in people', price: 3.8, image: '/menu/americano.jpg', type: 'Hot Coffee' },
      { id: 8, name: 'Irish Coffee', description: 'Mix of coffee and whiskey', ingredients: ['Espresso', 'Whiskey', 'Cream'], quote: 'For courageous souls', price: 6.0, image: '/menu/irishcoffee.jpg', type: 'Hot Coffee' },
      { id: 9, name: 'Turkish Coffee', description: 'Traditional brewing method', ingredients: ['Turkish coffee', 'Water'], quote: 'The voice of old times', price: 3.0, image: '/menu/turkcoffee.png', type: 'Hot Coffee' },
      { id: 10, name: 'Affogato', description: 'Espresso poured over ice cream', ingredients: ['Espresso', 'Vanilla ice cream'], quote: 'Harmony of contradictions', price: 5.0, image: '/menu/affogato.jpg', type: 'Hot Coffee' },

      { id: 11, name: 'Cold Brew', description: 'Long-brewed iced coffee', ingredients: ['Coffee', 'Cold water'], quote: 'The fruit of patience is cold', price: 4.7, image: '/menu/coldbrew.jpg', type: 'Iced Coffee' },
      { id: 12, name: 'Frappe', description: 'Cold, frothy and refreshing', ingredients: ['Coffee', 'Ice', 'Milk'], quote: 'Cold can also warm the soul', price: 4.2, image: '/menu/frappe.jpg', type: 'Iced Coffee' },
      { id: 13, name: 'Iced Latte', description: 'Iced version of latte', ingredients: ['Espresso', 'Cold milk', 'Ice'], quote: 'Elegance hides in the cold', price: 4.6, image: '/menu/icedlatte.jpg', type: 'Iced Coffee' },
      { id: 14, name: 'Iced Americano', description: 'Iced version of americano', ingredients: ['Espresso', 'Cold water', 'Ice'], quote: 'Silent and deep', price: 4.0, image: '/menu/icedamericano.jpg', type: 'Iced Coffee' },
      { id: 15, name: 'Mocha Frappe', description: 'Iced mocha experience', ingredients: ['Espresso', 'Chocolate', 'Ice'], quote: 'Dark and sweet', price: 4.8, image: '/menu/mochafrappe.jpg', type: 'Iced Coffee' },
      { id: 16, name: 'Iced Macchiato', description: 'Cold milk and espresso', ingredients: ['Espresso', 'Milk', 'Ice'], quote: 'Delicacy and strength', price: 4.5, image: '/menu/icedmacchiato.jpg', type: 'Iced Coffee' },
      { id: 17, name: 'Coffee Smoothie', description: 'Mix of coffee and fruit', ingredients: ['Coffee', 'Banana', 'Milk'], quote: 'Reunion with nature', price: 5.5, image: '/menu/coffeesmoothie.jpg', type: 'Iced Coffee' },
      { id: 18, name: 'Coffee Milkshake', description: 'Perfect harmony of coffee and ice cream', ingredients: ['Coffee', 'Ice cream', 'Milk'], quote: "Children's spirit with adult taste", price: 5.8, image: '/menu/coffeemilkshake.jpg', type: 'Iced Coffee' },
      { id: 19, name: 'Vanilla Iced Coffee', description: 'Vanilla flavored iced coffee', ingredients: ['Espresso', 'Vanilla syrup', 'Ice'], quote: 'Subtle taste, calm feeling', price: 4.9, image: '/menu/vanillaiced.jpg', type: 'Iced Coffee' },
      { id: 20, name: 'Caramel Iced Coffee', description: 'Combination of caramel and coffee', ingredients: ['Espresso', 'Caramel syrup', 'Milk', 'Ice'], quote: 'Sweet and refreshing', price: 5.0, image: '/menu/carameliced.jpg', type: 'Iced Coffee' },

      // Teas
      { id: 21, name: 'Green Tea', description: 'Cleansing and relaxing drink', ingredients: ['Green tea leaves'], quote: 'Cleanliness starts from within', price: 3.2, image: '/menu/greentea.jpg', type: 'Tea' },
      { id: 22, name: 'Earl Grey', description: 'Black tea with bergamot aroma', ingredients: ['Black tea', 'Bergamot'], quote: 'Change is necessary', price: 3.5, image: '/menu/earlgrey.jpg', type: 'Tea' },
      { id: 23, name: 'Chamomile Tea', description: 'Soothing and relaxing', ingredients: ['Chamomile'], quote: 'Calmness is in a cup', price: 3.0, image: '/menu/chamomile.jpg', type: 'Tea' },
      { id: 24, name: 'Mint Tea', description: 'Refreshing and invigorating', ingredients: ['Mint leaves'], quote: 'Refreshment comes sip by sip', price: 3.0, image: '/menu/minttea.jpg', type: 'Tea' },
      { id: 25, name: 'Rosehip Tea', description: 'Rich in vitamin C', ingredients: ['Rosehip'], quote: 'The tasty way to health', price: 3.2, image: '/menu/rosehip.jpg', type: 'Tea' },
      { id: 26, name: 'Black Tea', description: 'Traditional brewing method', ingredients: ['Black tea'], quote: 'There is power in simplicity', price: 2.5, image: '/menu/blacktea.jpg', type: 'Tea' },
      { id: 27, name: 'Lemon Tea', description: 'Hot tea with fresh lemon', ingredients: ['Black tea', 'Lemon'], quote: 'Sourness and warmth together', price: 3.0, image: '/menu/lemontea.jpg', type: 'Tea' },
      { id: 28, name: 'Ginger Tea', description: 'For warming up and boosting energy', ingredients: ['Ginger', 'Honey', 'Lemon'], quote: 'Warming starts from the soul', price: 3.4, image: '/menu/gingertea.png', type: 'Tea' },
      { id: 29, name: 'Blackberry Tea', description: 'Fruity sweet tea', ingredients: ['Blackberry'], quote: "Nature's sweet voice", price: 3.6, image: '/menu/blackberrytea.jpg', type: 'Tea' },
      { id: 30, name: 'Lavender Tea', description: 'Stress-reducing and relaxing', ingredients: ['Lavender'], quote: 'Peace for the soul with lavender', price: 3.3, image: '/menu/lavendertea.jpg', type: 'Tea' }
    ]
  }
};
export default drinks;
