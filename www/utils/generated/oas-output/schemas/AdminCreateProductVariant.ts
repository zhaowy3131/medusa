/**
 * @schema AdminCreateProductVariant
 * type: object
 * description: The product variant's details.
 * x-schemaName: AdminCreateProductVariant
 * required:
 *   - title
 *   - prices
 * properties:
 *   title:
 *     type: string
 *     title: title
 *     description: The variant's title.
 *   sku:
 *     type: string
 *     title: sku
 *     description: The variant's SKU.
 *   ean:
 *     type: string
 *     title: ean
 *     description: The variant's EAN.
 *   upc:
 *     type: string
 *     title: upc
 *     description: The variant's UPC.
 *   barcode:
 *     type: string
 *     title: barcode
 *     description: The variant's barcode.
 *   hs_code:
 *     type: string
 *     title: hs_code
 *     description: The variant's HS code.
 *   mid_code:
 *     type: string
 *     title: mid_code
 *     description: The variant's MID code.
 *   allow_backorder:
 *     type: boolean
 *     title: allow_backorder
 *     description: Whether it's allowed to order this variant when it's out of stock.
 *   manage_inventory:
 *     type: boolean
 *     title: manage_inventory
 *     description: Whether Medusa manages the variant's inventory quantity. If disabled, the product variant is always considered in stock.
 *   variant_rank:
 *     type: number
 *     title: variant_rank
 *     description: The sorting order of the variant among other variants in the product.
 *   weight:
 *     type: number
 *     title: weight
 *     description: The variant's weight.
 *   length:
 *     type: number
 *     title: length
 *     description: The variant's length.
 *   height:
 *     type: number
 *     title: height
 *     description: The variant's height.
 *   width:
 *     type: number
 *     title: width
 *     description: The variant's width.
 *   origin_country:
 *     type: string
 *     title: origin_country
 *     description: The variant's origin country.
 *   material:
 *     type: string
 *     title: material
 *     description: The variant's material.
 *   metadata:
 *     type: object
 *     description: The variant's metadata, used to store custom key-value pairs.
 *   prices:
 *     type: array
 *     description: The variant's prices.
 *     items:
 *       $ref: "#/components/schemas/AdminCreateProductVariantPrice"
 *   options:
 *     type: object
 *     description: The variant's options, where the key is an option's name, and the value is the option's value.
 *     example:
 *       Color: Black
*/

