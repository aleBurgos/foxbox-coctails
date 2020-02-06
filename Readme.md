## Foxbox Challenge

**Steps to run the solution**

 1. Clone the project
 2. Install the dependencies: `yarn install`
 3. To run iOS simulator : `yarn ios`
 4. To run Android: `yarn android`

**Libraries used**
 - `React-Navigation` (and his dependencies). The reason why I decided to use this library is that it is simple to handle navigation between differents screens and it has a rich API, with a big community behind. The performance is really native-like (thanks to react-native-screens), and works perfectly in case of the app grow up.
 - `ReactJs/toolkit`: This library intends to be a simple way to configure a redux store but also work with it. I use it because it has an easy way to work with reducers, keeping them simple and  enabling change the state in an immutable way (it uses immerJs internally).
 - `React-Saga`: I use it because I think it enables work with side-effects more efficiently, enabling to debounce a task (or ajax call) after some conditions or the user can cancel them improving the performance of the app (consuming fewer resources or data) and enhancing the user experience.
 - `react-native-fast-image`:  Loading images always is an expensive task, so thanks to this library and his features (like  use of cache, preload images, and few more) improve a lot the user experience avoiding flickering or slowness when load images.

**Improving the list perfomance **

To improve the perfomance in lists we can:

 - Try to keep simple the list items, as light as possible, avoiding use complex layouts in it.
 - Avoid unecessay updates in list items, it is possible defining the items as `PureComponents` or using `shouldComponentUpdate()` method in list item components.
 - Use FlatList to render  a list of items instead of use a `.map()`. FlatList is a performant component to render big amount of items.
 - To update a single item in a `FlatList`  use `extraData` property   which is designed for updating your exisitng list items without updating the list itself or other list items.
 -  With `FlatList` , if the list items have fixed size  use `getItemLayout`.
 -  With `FlatList`, Tweak the  props ([`windowSize`, `initialNumToRender` etc](https://facebook.github.io/react-native/docs/optimizing-flatlist-configuration).) to find your desired performance and fillrate.

