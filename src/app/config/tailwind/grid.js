const grid = {
  mobile: {
    columns: 6,
    gutter: 12,
    margin: 12,
    mockupWidth: 375,
    fontScalingMaxWidth: 475,
  },
  tablet: {
    columns: 6,
    gutter: 12,
    margin: 12,
    mockupWidth: 768,
    screen: "md",
  },
  desktop: {
    columns: 12,
    gutter: 8,
    margin: 8,
    mockupWidth: 1440,
    fontScalingMaxWidth: 1680,
    screen: "lg",
  },
  hd: {
    columns: 12,
    gutter: 8,
    margin: 8,
    mockupWidth: 1920,
    screen: "xl",
  },
  fullHd: {
    columns: 12,
    gutter: 16,
    margin: 80,
    mockupWidth: 2560,
    screen: "2xl",
  },

  // Breakpoints
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
    hd: 1280,
    fullHd: 1536,
  },

};

export default grid;
