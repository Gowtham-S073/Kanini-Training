using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CdefrstEfApi.Migrations
{
    /// <inheritdoc />
    public partial class EmpdetailCodefrst : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmpDetails",
                columns: table => new
                {
                    empno = table.Column<int>(type: "int", nullable: false),
                    aadharno = table.Column<long>(type: "bigint", nullable: false),
                    panno = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmpDetails", x => x.empno);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmpDetails");
        }
    }
}
