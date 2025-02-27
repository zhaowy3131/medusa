import { IProductModuleService, ProductTypes } from "@medusajs/types"
import { Modules } from "@medusajs/utils"
import { StepResponse, createStep } from "@medusajs/workflows-sdk"

export const createProductTypesStepId = "create-product-types"
/**
 * This step creates one or more product types.
 */
export const createProductTypesStep = createStep(
  createProductTypesStepId,
  async (data: ProductTypes.CreateProductTypeDTO[], { container }) => {
    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    const created = await service.createProductTypes(data)
    return new StepResponse(
      created,
      created.map((productType) => productType.id)
    )
  },
  async (createdIds, { container }) => {
    if (!createdIds?.length) {
      return
    }

    const service = container.resolve<IProductModuleService>(Modules.PRODUCT)

    await service.deleteProductTypes(createdIds)
  }
)
