/// <reference path="../../typings/angularjs/angular.d.ts" />

module ng.e{    
	export interface IMultiDataSourceService
	{
		list( filters: any ): ng.IHttpPromise;
    }
}