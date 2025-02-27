import { ICustomerModuleService } from "@medusajs/types"
import { Modules } from "@medusajs/utils"
import { createStep, StepResponse } from "@medusajs/workflows-sdk"

export const deleteCustomerGroupStepId = "delete-customer-groups"
/**
 * This step deletes one or more customer groups.
 */
export const deleteCustomerGroupStep = createStep(
  deleteCustomerGroupStepId,
  async (ids: string[], { container }) => {
    const service = container.resolve<ICustomerModuleService>(Modules.CUSTOMER)

    await service.softDeleteCustomerGroups(ids)

    return new StepResponse(void 0, ids)
  },
  async (prevCustomerGroups, { container }) => {
    if (!prevCustomerGroups) {
      return
    }

    const service = container.resolve<ICustomerModuleService>(Modules.CUSTOMER)

    await service.restoreCustomerGroups(prevCustomerGroups)
  }
)
