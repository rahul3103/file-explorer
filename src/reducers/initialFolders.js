const initialState = [
  {
    name: 'LittleBigPlanet PS Vita',
    identifier: 'parent0',
    type: 'directory',
    children: [
      {
        name: 'Game play resources',
        type: 'directory',
        identifier: 'child0',
        children: [
          {
            name: 'Installation',
            identifier: 'sub-child install0',
            type: 'directory',
            children: [
              {
                file_name: 'install.iso',
                type: 'iso image'
              },
              {
                file_name: 'archive_unbox.dat',
                type: 'dat file'
              }
            ]
          },
          {
            name: 'Resource Dependency',
            identifier: 'sub-child resource0',
            type: 'directory',
            children: [
              {
                file_name: 'profile.sav',
                type: 'sav file'
              },
              {
                file_name: 'snd0.AT3',
                type: 'AT3 file'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Marvel Super Hero Edition',
    identifier: 'parent1',
    type: 'directory',
    children: [
      {
        name: 'Game play resources',
        type: 'directory',
        identifier: 'child1',
        children: [
          {
            name: 'Installation',
            identifier: 'sub-child install1',
            type: 'directory',
            children: [
              {
                file_name: 'install.iso',
                type: 'iso image'
              },
              {
                file_name: 'archive_unbox.dat',
                type: 'dat file'
              }
            ]
          },
          {
            name: 'Resource Dependency',
            identifier: 'sub-child resource1',
            type: 'directory',
            children: [
              {
                file_name: 'profile.sav',
                type: 'sav file'
              },
              {
                file_name: 'snd0.AT3',
                type: 'AT3 file'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Splice: Tree of Life',
    identifier: 'parent2',
    type: 'directory',
    children: [
      {
        name: 'Game play resources',
        type: 'directory',
        identifier: 'child2',
        children: [
          {
            name: 'Installation',
            identifier: 'sub-child install2',
            type: 'directory',
            children: [
              {
                file_name: 'install.iso',
                type: 'iso image'
              },
              {
                file_name: 'archive_unbox.dat',
                type: 'dat file'
              }
            ]
          },
          {
            name: 'Resource Dependency',
            identifier: 'sub-child resource2',
            type: 'directory',
            children: [
              {
                file_name: 'profile.sav',
                type: 'sav file'
              },
              {
                file_name: 'snd0.AT3',
                type: 'AT3 file'
              }
            ]
          }
        ]
      }
    ]
  }
];

const initialFolders = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default initialFolders;
