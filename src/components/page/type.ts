import type { IForm } from '@/components/form/type'

// PageContent
interface IPageContentProps {
  config: {
    header: {
      title: string
      btnTxt: string
    }
    propsList: Record<string, any>[]
    pagination: {
      currentPage: number
      pageSize: number
    }
  }
  model: {
    dataList: any[]
    totalCount: number
  }
}

// PageDialog
type DialogType = 'add' | 'edit'
interface IPageDialogProps {
  config: {
    header: { addTitle: string; editTitle: string }
    dialogProps: Record<string, any>
    footer: { cancelTxt?: string; addConfirmTxt?: string; editConfirmTxt?: string }
    formConfig: { ui: IForm; initValues?: Record<string, any> }
  }
}

// PageSearch
interface IPageSearchProps {
  config: IForm
  initValues?: Record<string, any>
}

export type { IPageContentProps, IPageDialogProps, IPageSearchProps, DialogType }
