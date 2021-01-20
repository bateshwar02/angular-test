export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Projects',
    url: '/project',
    icon: 'fa fa-tasks',
    children: [
      {
        name: 'Add',
        url: '/project/add',
        icon: 'fa fa-circle-o'
      },
      {
        name: 'View',
        url: '/project/view',
        icon: 'fa fa-circle-o'
      }
    ]
  },
  {
    name: 'Forms',
    url: '/form',
    icon: 'fa fa-wpforms',
    children: [
      {
        name: 'Add',
        url: '/form/add',
        icon: 'fa fa-circle-o'
      },
      {
        name: 'View',
        url: '/form/view',
        icon: 'fa fa-circle-o'
      }
    ]
  },
  {
    name: 'User',
    url: '/user',
    icon: 'fa fa-user',
    children: [
      {
        name: 'Add',
        url: '/user/add',
        icon: 'fa fa-circle-o'
      },
      {
        name: 'View',
        url: '/user/view',
        icon: 'fa fa-circle-o'
      }
    ]
  }
];
