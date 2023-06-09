# Link to a specific card

One way to share a specific card is to use url hash.

## Url hash

A url hash is like
```
https://tpemartin.github.io/econWish/#1zrBNswpDnQ7groX2osHuIz2YhV75Ksee
```
where `#1zrBNswpDnQ7groX2osHuIz2YhV75Ksee` is the hash. It is usually used to store the state of the app that the user wants its url to be bookmarked. Here the state we choose to store is the id of the card that the user is interested in.

Later when a user visits the url, we can use the hash to scroll the designated card into view, via the following code:
```js
function scrollIntoViewWithHashId() {
    const hash = window.location.hash;
    if (hash) {
        const id = hash.slice(1);
        //console.log(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }
}
```

To obtain the url hash, use `window.location.hash`.

### Copy link button

When user click a copy link button of a card, we want to copy the url hash of that card to clipboard.

  * Event: `onClick`
  * Event handler: `copyLinkToClipboard`
  * target DOM element: `<ButtonCopyLink>`

#### Action

> ..., we want to copy the url hash of that card to clipboard.

To copy the url hash to clipboard, we can use the following code:
```js
function copyLink(url) {
    navigator.clipboard.writeText(url)
}
```
where `url` is the url hash.

#### Trigger

> When user click a copy link button of a card, ...

This means the action part is an event handler. Therefore, we need to use `onClick` to implement it.



## Interaction 

    * When user visits our web app, wait till the `<AppContent/>` is loaded, then check if the url hash is empty. If it is not empty, then scroll the designated card into view.

### Action

> ... scroll the designated card into view.

We can design a function that takes id as input and scroll the card with that id into view.


### Trigger

> ... wait till the `<AppContent/>` is loaded, then check if the url hash is empty.

This means the checking then action part is an effect. Therefore, we need to use `useEffect` to implement it.



# Share

  * [react-share](https://www.npmjs.com/package/react-share)


# Performance improvement


## Image Skeleton

A blob is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.

To download image blob with `axios`, we need to set `responseType` to `blob`:
```js
axios.get(imageUrl, { responseType: 'blob' })
 .then(response => {
    const imageBlob = response.data
    const imageSrc = URL.createObjectURL(imageBlob)
    const imageAlt = 'image'})
```

  * `response.data` is the image blob, 
  * which can be converted to image src url using `URL.createObjectURL(imageBlob)`. That later can be used in `<img>` in react js like `<img src={imageSrc} alt={imageAlt} />`.

