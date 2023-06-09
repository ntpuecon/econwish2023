# Get server data

## axios

We can use `axios` module. You can install `axios`:
```
npm install axios
```

  * [axios](https://axios-http.com/docs/intro)

## get data

`axios.get()` returns a promise. We can use `then` method to get the data.

```js
axios.get('server url')
  .then((response) => {
    // handle success
    console.log(response);
  })
```

  * When return is a promise, all consequencial code must be put in `then` method.
  * `then` method takes a function as parameter. The function is called when the promise is resolved. The parameter of the function is the resolved value of the promise.
  * Use `console.log` to print the response to the console.
  * Promise is part of asynchronous programming. We will learn more about asynchronous programming in the future.

## Example

  * <https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/App.jsx#L31>

# Component with data state

## appcontent

  * <https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/App.jsx#L42>
  * depends on data loading status. 

### create state variable

```
const [data, setData] = useState(null)
```

  * `data` is the state variable.
  * `setData` is the function to set the state variable.
  * `useState` is a function to create state variable. The parameter is the initial value of the state variable.
  * `null` is the initial value of the state variable.

### conditional rendering on state variable

```js
let appcontent = data ? 
        <AppContent users={convertUsersToArrayOfObject(data)}/>:
        <div>Loading...</div>
```

### trigger for state change

It is triggered when `axios.get()` promise is resolved.

```js
axios.get(appConfig.entryUrl)
        .then((response) => {
            console.log(response)
            if(response.status===200){
                setData(response.data)
            }
        })
```

  * response.stats is the status code of the response. 200 means success.
  
## cardcontent

  * <https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L15>

### create state variable

```js
const [showFront, setShowFront] = useState(true)
```

### conditional rendering on state variable

```js
var cardContent = showFront ?
    <ContentPostalFront ... /> :
    <ContentPostalBack ... />
```

### trigger for state change

  * when card front **wish text** is clicked, the card flips to the back.
  * when card back **close button** is clicked, the card flips to the front.

The above two triggers are involved with:

  * event: User interaction event. Here is click on some DOM element. 
  * event handler: What to do when the event is triggered. 

***

* when card front **wish text** is clicked, the card flips to the back.
  
  * event: click on `wishText` DOM element.
  * event handler: [`handleClipWish` function](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#LL22C12-L22C26)
    * set `showFront` state variable to `false`.
    * `setShowFront(false)`

> Note `handleClipWish` must sit inside `Card2` function for it to see `showFront` and `setShowFront`.

We need to attach the event handler to the DOM element. 
  * Find the DOM element in JSX.  
    * [`<ContentPostalFront />`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L77) 's [`<Button/>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#LL92C11-L92C11) element.
  * Add `onClick` attribute to the DOM element and set it to the event handler function via:
    * `onClick={event handler}`

> Note that `handleClipWish` is created within [`<Card2>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L15). Therefore, it has to be passed to [`<ContentPostalFront/>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L77), then from `<ContentPostalFront/>` passed to [`<Button/>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L92).

***

* when card back **close button** is clicked, the card flips to the front.

  * event: click on `closeButton` DOM element.
  * event handler: [`handleClose` function](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L25)
    * set `showFront` state variable to `true`.
    * `setShowFront(true)`  

  * Attach event handler:
    * target DOM [`<IconButton>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L140) inside [`<ContentPostalBack>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#LL101C22-L101C22)
    * `onClick={event handler}` on target DOM.

## ContentPostalBack wish toggle

### create state variable

  * <https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L103>

```js
const [showPic, setShowPic] = useState(false)
```

### conditional rendering on state variable

Here the conditional rendering is working through css setting regarding the affected DOM elements.
  * [Wish context visibility](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L126)
  * [Image opacity](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L120)

  * <https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L113-L114>

### trigger for state change

The trigger is when the switch is changed.

  * event: change on [`<CustomizedSwitches>`] DOM element.
  * event handler: [`handleToggle` function](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#LL105C12-L105C24)
  * attach event handler:
    * target DOM: [`<CustomizedSwitches>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/Card2/index.jsx#L138)
    * `onChange={event handler}`


# Autocomplete Search

  * reference: https://mui.com/material-ui/react-autocomplete/
  
## UI Usage:

  * options: in `App.jsx` options is created through
  ```js
  //create autocompleteOptions in global environment
  window.autocompleteOptions = []
  //push data into autocompleteOptions
  users.forEach(e=>
      {
          window.autocompleteOptions.push(
              {
                  label: e.name+' - '+e.grade,
                  id: e.id
              }
          )
      })
  ```

  * `window` means `in global environment`. 

## User interaction

When user types in the search box, the `onChange` event is triggered. 

  * event: `onChange` on `input` DOM element.
  * event handler: [`handleOnChange`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/SearchAppBar/AutocompleteSearch/index.jsx#L11)
    ```js
    const handleOnChange = (event, newValue) => {
      scrollToSearchedCard(newValue.id)
    }
    ```
    * **change event** creates information `newValue` other than `event` object.
    * `scrollToSearchedCard` is a function that scroll to the searched card using `scrollIntoView` method of the target DOM element.
  
  * target DOM: [`<Autocomplete>`](https://github.com/tpemartin/econWish/blob/8652f38d00f98ddd6427fbddcfcad4bbbe9fcbee/src/components/SearchAppBar/AutocompleteSearch/index.jsx#L17)
    * attach event handler: `onChange={event handler}`

