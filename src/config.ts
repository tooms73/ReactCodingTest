const config = {
  row1: {
    col1: {
      title: 'GENERAL',
      content: [
        {
          id: 'id1',
          type: 'toggle',
          label: 'CASE MANAGEMENT',
        },
        {
          id: 'id2',
          type: 'toggle',
          label: 'NOTIFICATION',
        },
      ],
    },
    col2: {
      title: '',
      content: [
        {
          id: 'id3',
          type: 'toggle',
          label: 'MAP TIMELINE',
        },
        {
          id: 'id4',
          type: 'toggle',
          label: 'MASS COMMUNICATIONS',
        },
      ],
    },
    col3: {
      title: '',
      content: [
        {
          id: 'id5',
          type: 'toggle',
          label: 'VIEWS & BRIEFINGS',
        },
        {
          id: 'id6',
          type: 'toggle',
          label: 'TRAFFIC CAMERAS',
        },
      ],
    },
  },
  row2: {
    col1: {
      title: 'SETTINGS',
      content: [
        {
          id: 'id7',
          type: 'grp_normal',
          content: [
            {
              id: 'id8',
              type: 'toggle',
              label: 'AUDIT LOG',
            },
            {
              id: 'id9',
              type: 'toggle_dropdown',
              label: 'USERS',
              content: [
                {
                  id: 'id10',
                  type: 'toggle',
                  label: 'USERS ADD',
                },
                {
                  id: 'id11',
                  type: 'toggle',
                  label: 'USER DELETE',
                },
                {
                  id: 'id12',
                  type: 'toggle',
                  label: 'USERS EDIT',
                },
                {
                  id: 'id13',
                  type: 'toggle',
                  label: 'MAX USER',
                  numbers: [0, 5, 10, 15, 20, 25],
                },
              ],
            },
          ],
        },
      ],
    },
    col2: {
      title: 'ALERTS',
      content: [
        {
          id: 'id14',
          type: 'grp_compact',
          content: [
            {
              id: 'id15',
              type: 'toggle',
              label: 'ALERT MANAGER',
            },
            {
              id: 'id16',
              type: 'toggle',
              label: 'ALERT RULES',
              numbers: [0, 10, 25, 50, 100],
            },
          ],
        },
      ],
    },
  },
};

export default config;
