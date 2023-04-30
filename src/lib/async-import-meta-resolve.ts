export default async function async_import_meta_resolve( specified: string, parent?: string|URL ): Promise<string|Error>{

  let resolves: string
  let rejects: Error|undefined = undefined

  try {
    //@ts-ignore: @to-fix node v20 no more Promise
    resolves = import.meta.resolve( specified, parent )
  }catch ( Error ) {

    rejects = Error
  }

  return new Promise( ( resolve, reject ) => {

    if( rejects instanceof Error )
      reject( rejects )

    resolve( resolves )
  } )
}