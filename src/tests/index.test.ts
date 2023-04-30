import * as tttt from 'trythistrythat'
import * as exports from '../index.js'
import { AssertionError } from "assert"

type indexTest = {
  async_import_meta_resolve: string,
}
export default async ( id:string ): Promise<void> => {

  const name: string = 'exports from index.js'
  const result: boolean|AssertionError = await tttt.deepStrictEqual( async(): Promise<TTTTResolversType> => {

    const actual: indexTest = {
      async_import_meta_resolve: exports.async_import_meta_resolve.constructor.name
    }

    const expected: indexTest = {
      async_import_meta_resolve: 'AsyncFunction'
    }

    return tttt.resolvers( actual, expected )
  } )

  if( result instanceof Error ) {
    tttt.failed( name )
    tttt.end( id, false, name, result.message )
  }else
    tttt.end( id, true, name )
}