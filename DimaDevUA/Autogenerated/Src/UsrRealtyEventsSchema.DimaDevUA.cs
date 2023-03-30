namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("03efbdc0-3f67-4a7f-aadb-fb2a3594e09c");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("197ad257-1fd9-4761-8cbe-bcdef6181f32");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,65,79,194,64,16,133,239,36,252,135,73,227,161,77,72,163,87,81,18,65,52,36,70,141,128,23,227,97,217,14,117,205,118,183,217,221,130,104,252,239,206,118,33,148,194,193,185,80,166,111,190,190,55,25,197,10,180,37,227,8,51,52,134,89,189,116,233,72,171,165,200,43,195,156,208,170,219,249,233,118,128,170,178,66,229,48,221,88,135,69,191,217,106,14,26,76,199,202,9,39,208,254,71,147,142,87,168,220,78,250,86,183,55,117,239,65,208,119,20,154,120,202,63,176,96,143,100,19,174,33,154,91,243,130,76,186,205,72,50,107,5,143,146,247,48,91,86,11,41,56,112,223,134,32,57,65,131,75,24,50,139,39,222,4,202,54,106,3,168,87,228,92,100,8,43,45,50,120,82,19,101,209,56,138,20,235,197,39,114,7,22,85,134,166,7,129,57,196,37,229,171,201,55,38,183,128,201,158,216,128,251,90,144,145,180,9,220,145,48,233,31,42,3,26,76,157,138,182,16,135,70,18,6,90,226,12,185,40,152,132,210,8,238,87,22,166,210,123,116,179,77,137,217,72,203,170,80,175,76,86,120,181,149,14,98,191,214,103,175,159,79,111,163,246,215,197,18,226,0,27,192,197,249,174,146,67,81,43,155,47,76,39,118,196,20,71,137,25,249,112,166,194,254,177,202,58,227,239,131,142,208,178,28,103,88,148,146,57,242,125,172,244,181,13,51,167,149,209,145,42,218,63,93,168,207,246,160,57,147,226,155,45,36,78,107,98,188,63,149,112,99,81,15,162,58,246,196,206,180,30,138,252,40,232,177,29,178,29,26,233,157,54,5,115,113,203,38,33,47,210,243,225,217,73,148,251,48,122,13,10,215,48,254,226,88,122,167,187,249,182,252,119,255,119,251,72,63,221,206,239,31,64,79,6,210,157,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("8148d243-4971-4626-82a6-54204463af4c"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("197ad257-1fd9-4761-8cbe-bcdef6181f32"),
				CreatedInSchemaUId = new Guid("03efbdc0-3f67-4a7f-aadb-fb2a3594e09c"),
				ModifiedInSchemaUId = new Guid("03efbdc0-3f67-4a7f-aadb-fb2a3594e09c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("03efbdc0-3f67-4a7f-aadb-fb2a3594e09c"));
		}

		#endregion

	}

	#endregion

}

