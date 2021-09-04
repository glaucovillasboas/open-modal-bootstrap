# open-modal-bootstrap
## About The Project

This project serves to load Bootstrap modals and modals's content from separate files using javascript vanilla. [See preview.](https://glappsmobile.github.io/open-modal-bootstrap/)

### Built With

* [Bootstrap v5](https://getbootstrap.com/docs/5.1/getting-started/download/)
* [Javascript](https://javascript.com)

### Installation

1. Import `Bootstrap` css and script `(v5.0 ++)`
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
   ```

2. Clone this repo
   ```sh
   git clone https://github.com/glappsmobile/open-modal-bootstrap.git
   ```
3. import `scripts/configModals.js` to your project

## Usage
After importing `Bootstrap` and `scripts/configModal.js`, you'll need 3 things:

1. A tag to serve as a button
2. A html file with the modal (php file that echoes a html inside a string works too)
3. A html file with the modal's content (php file that echoes a html inside a string works too)

### The button tag
The tag can be anything (`<a>`, `<span>`, `<button>` ...), but it needs 4 specific props in order to work:

1. `data-bs-toggle="modal" //Tells the script that this is a open-modal button`
2. `modal="path/to/modal" //Where the modal file is located`
3. `content="path/to/modal-content" //Where the modal's content file is located`
4. `title="Cool Title" //The modal's title`

It'll look something like this:
```html
<button 
    data-bs-toggle="modal"
    modal="modals/my-modal.html"
    content="forms/my-subscribe-form.html"
    title="Subscribe"
    class="btn btn-primary"
>
  Open Modal
</button>
```
### The modal
It can be any bootstrap v5 modal:

```html
<div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">YOUR MODAL TITLE WILL BE SHOWN HERE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- YOUR MODAL CONTENT WILL BE SHOWN HERE -->
      </div>
    </div>
  </div>
</div>
```
[See more examples](https://getbootstrap.com/docs/5.1/components/modal/#examples)

### The content
The content can be anything in html, it can be a form, an image, a video or anything else.
Example:
```html
<form>
  <div class="form-group">
    <span>Your email:</span>
    <input type="text" name="email" class="form-control" placeholder="Insert your email">
  </div>
</form>
<button class="btn btn-primary mt-3" onclick="alert('click')">Click me</button>
```
## Done
After following all those steps, you can have modals and contents in multiple files and easily rendering them when clicking on the button.
 [Try it yourself](https://codesandbox.io/s/open-bootstrap-modal-j4ogo)
 
 
<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/glappsmobile/open-modal-bootstrap/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Glauco Villas Boas - glappsmobile@gmail.com.com

Project Link: [https://github.com/glappsmobile/open-modal-bootstrap](https://github.com/glappsmobile/open-modal-bootstrap)
