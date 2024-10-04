package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
)

func main() {
	app := fiber.New()

	// app.Static("/", "./front-end/dist",func(c *fiber.Ctx) error{

	// } )

	// app.Get("/*", func(c *fiber.Ctx) error {
	//     return c.SendFile("./front-end/dist/index.html")
	// })

	app.Use(compress.New(compress.Config{
		Level: compress.LevelBestSpeed, // Adjust compression level as needed
	}))

	app.Use(func(c *fiber.Ctx) error {
		// Check if compression is applied and set the Content-Encoding header
		if c.Response().Header.ContentLength() > 0 {
			encoding := c.Response().Header.Peek(fiber.HeaderContentEncoding)
			if len(encoding) > 0 {
				c.Set(fiber.HeaderContentEncoding, string(encoding))
			}
		}
		return c.Next()
	})

	app.Static("/", "./fe-next/out", fiber.Static{
		CacheDuration: 3600,
	})

	app.Use(func(c *fiber.Ctx) error {
		// Serve custom 404 page from out/404.html
		return c.SendFile("./fe-next/out/404.html")
	})

	app.Listen(":3000")
}
