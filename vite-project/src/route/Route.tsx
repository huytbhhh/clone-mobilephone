import { createBrowserRouter } from 'react-router-dom'

const Router = createBrowserRouter([
  {
    path: '*',
    element: <p>Page Not Found</p>
  },

  {
    path: '/admin',
    children: [
      {
        index: true,
        element: <p>Dashboard</p>
      },
      {
        path: 'category',
        children: [
          {
            index: true,
            element: <p>List Category</p>
          },
          {
            path: 'create',
            element: <p>Create Category</p>
          },
          {
            path: 'edit',
            element: <p>Edit Category</p>
          },
          {
            path: 'details',
            element: <p>Detail Category</p>
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      },
      {
        path: 'product',
        children: [
          {
            index: true,
            element: <p>List Product</p>
          },
          {
            path: 'create',
            element: <p>Create Product</p>
          },
          {
            path: 'edit',
            element: <p>Edit Product</p>
          },
          {
            path: 'details',
            element: <p>Detail Product</p>
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            element: <p>List user</p>
          },
          {
            path: 'create',
            element: <p>Create user</p>
          },
          {
            path: 'edit',
            element: <p>Edit user</p>
          },
          {
            path: 'details',
            element: <p>Detail user</p>
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      },
      {
        path: 'Blog',
        children: [
          {
            index: true,
            element: <p>List Blog</p>
          },
          {
            path: 'create',
            element: <p>Create Blog</p>
          },
          {
            path: 'edit',
            element: <p>Edit Blog</p>
          },
          {
            path: 'details',
            element: <p>Detail Blog</p>
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      },
      {
        path: 'Order',
        children: [
          {
            index: true,
            element: <p>List Order</p>
          },
          {
            path: 'create',
            element: <p>Create Order</p>
          },
          {
            path: 'edit',
            element: <p>Edit Order</p>
          },
          {
            path: 'details',
            element: <p>Detail Order</p>
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      },
      {
        path: 'Brand',
        children: [
          {
            index: true,
            element: <p>List Brand</p>
          },
          {
            path: 'create',
            element: <p>Create Brand</p>
          },
          {
            path: 'edit',
            element: <p>Edit Brand</p>
          },
          {
            path: 'details',
            element: <p>Detail Brand</p>
          },
          {
            path: 'destroy',
            element: <p>Destroy Success</p>
          }
        ]
      }
    ]
  }
])

export default Router
