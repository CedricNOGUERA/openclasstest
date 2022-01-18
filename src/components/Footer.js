


function Footer() {

    return (
        <footer class="footer mt-auto py-3 bg-light border border-top">
            <div class="container">
                <div className="row">

                    <span class="text-muted col-4">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                    </span>
                    <p class="col-8 text-end"><a href="#">Back to top</a></p>
                </div>
            </div>
        </footer>

    )
}

export default Footer;