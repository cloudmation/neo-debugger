﻿using Microsoft.VisualStudio.Shared.VSCodeDebugProtocol.Messages;
using Neo.VM;
using NeoDebug.VariableContainers;
using NeoFx.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace NeoDebug.Adapter.ModelAdapters
{
    internal class AdapterBase : StackItem
    {
        public override bool Equals(StackItem other)
        {
            throw new InvalidOperationException();
        }

        public override bool GetBoolean()
        {
            throw new InvalidOperationException();
        }

        public override byte[] GetByteArray()
        {
            throw new InvalidOperationException();
        }
    }
}