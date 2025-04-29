export default {
    sidebar: [
      {
        type: 'doc',
        id: 'README', // root README.md
        label: 'Overview',
      },
      {
        type: 'category',
        label: 'MCU',
        items: [
          {
            type: 'doc',
            id: "MCU/TBB_0/README",
            label: 'TBB 0',
          },
          {
            type: 'doc',
            id: "MCU/TBB_1/README",
            label: 'TBB 1',
          },
        ],
      },
      {
        type: 'category',
        label: 'MPU',
        items: [
          {
            type: 'doc',
            id: "MPU/TBB_0/README",
            label: 'TBB 0',
          },
        ],
      },
    ],
  };
  