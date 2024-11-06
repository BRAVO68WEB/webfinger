import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { poweredBy } from 'hono/powered-by'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()

app.use(cors({
  origin: '*',
}))
app.use(poweredBy())
app.use(prettyJSON())

app.get('/.well-known/webfinger', (c) => {
  return c.json({
    "subject": "acct:jbandyopadhayaya@gmail.com",
    "aliases": [
      "https://b68web.xyz/@bravo68web",
      "https://b68web.xyz/users/bravo68web"
    ],
    "links": [
      {
        "rel": "http://webfinger.net/rel/profile-page",
        "type": "text/html",
        "href": "https://b68web.xyz/@bravo68web"
      },
      {
        "rel": "self",
        "type": "application/activity+json",
        "href": "https://b68web.xyz/users/bravo68web"
      },
      {
        "rel": "http://ostatus.org/schema/1.0/subscribe",
        "template": "https://b68web.xyz/authorize_interaction?uri={uri}"
      },
      {
        "rel": "http://webfinger.net/rel/avatar",
        "href": "https://github.com/BRAVO68web.png"
      },
      {
        "rel": "http://openid.net/specs/connect/1.0/issuer",
        "href": "https://auth.b68.dev/oidc/"
      }
    ]
  })
})

export default app
