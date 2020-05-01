const mock = {
  getCategories: [
    {
      name: "Mattresses",
      subcategories: [
        {
          name: "Hybrid",
          productFamilies: [
            {
              fullName: "Hybrid",
              menuName: "Hybrid",
              onSale: false,
              newProducts: false,
              priceUpper: 169900,
              priceUpperOriginal: 169900,
            },
            {
              fullName: "Black",
              menuName: "Black",
              onSale: false,
              newProducts: false,
              priceUpper: 359900,
              priceUpperOriginal: 359900,
            },
            {
              fullName: "Harmony Lux - Diamond",
              menuName: "Harmony Lux - Diamond",
              onSale: false,
              newProducts: true,
              priceUpper: 249900,
              priceUpperOriginal: 249900,
            },
            {
              fullName: "Harmony Lux - Carbon",
              menuName: "Harmony Lux - Carbon",
              onSale: false,
              newProducts: false,
              priceUpper: 359900,
              priceUpperOriginal: 359900,
            },
          ],
        },
      ],
    },
    {
      name: "Furniture",
      subcategories: [
        {
          name: "Bed Frames",
          productFamilies: [
            {
              fullName: "Flat Foundation",
              menuName: "Flat Foundation",
              onSale: false,
              newProducts: true,
              priceUpper: 26000,
              priceUpperOriginal: 26000,
            },
            {
              fullName: "Advanced Motion Base",
              menuName: "Advanced Motion Base",
              onSale: false,
              newProducts: true,
              priceUpper: 159800,
              priceUpperOriginal: 159800,
            },
          ],
        },
      ],
    },
  ],
};

const createKey = family => {
  if (!family) return null;

  return family.menuName.toLowerCase();
};


const a = data => {
  const productFamiliesMap = data.getCategories.reduce((data, { subcategories }) => {

    return Object.assign(data, subcategories.reduce((data, { productFamilies }) => {

      return Object.assign(data, productFamilies.reduce((data, productFamily) => {

        const key = createKey(productFamily);

        return Object.assign(data, {
          [key]: productFamily
        });
      }, {}));
    }, {}));
  }, {});

  return productFamiliesMap;
};

const b = data => {
  const productFamiliesMap = data.getCategories.reduce((data, { subcategories }, key) => {
    return Object.assign(data, {
      [key]: subcategories
    });
  }, {});

  return productFamiliesMap;
};

// console.log(a(mock));
b(mock);
