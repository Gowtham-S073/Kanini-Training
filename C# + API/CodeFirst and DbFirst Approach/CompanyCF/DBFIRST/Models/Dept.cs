using System;
using System.Collections.Generic;

namespace DbEfApi.Models;

public partial class Dept
{
    public int Deptno { get; set; }

    public string? Ename { get; set; }

    public virtual ICollection<Emp> Emps { get; set; } = new List<Emp>();
}
