export default (params) => `<!DOCTYPE html>
<html ${params.HTML_ATTRS}>

<head ${params.HEAD_ATTRS}>
  ${params.HEAD}
</head>

<body ${params.BODY_ATTRS}>${params.BODY_PREPEND}

<form name="contact" data-netlify="true" method="POST" data-netlify-honeypot="bot-field" action="/contact/thanks">
<input type="hidden" name="form-name" value="contact" />
<div class="flex">
    <div>
        <label class="required" for="name">Name</label>
        <input required type="text" name="name" placeholder="Post Malone" />
    </div>
    <div>
        <label class="required" for="email">Email</label>
        <input required type="email" name="email" placeholder="postie@auspost.com.au" />
    </div>
</div>
<div>
    <label for="date">Studio Date</label>
    <input type="date" name="date" placeholder="postie@auspost.com.au" />
</div>
<div class="message">
    <label for="message">Message</label>
    <textarea type="message" name="message" placeholder="..."></textarea>
</div>
<Button type="submit">Submit</Button>
</form>

  ${params.APP}
</body>

</html>`
