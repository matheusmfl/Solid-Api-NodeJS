import { randomUUID } from 'node:crypto'

export class Specification {
  id?: string
  name: string | undefined
  description: string | undefined
  created_at: Date | undefined

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
